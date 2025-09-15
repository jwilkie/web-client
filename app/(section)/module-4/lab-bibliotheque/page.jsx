import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import { WebExample, Code } from '@/components/WebExample';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - La bibliothèque avec interface",
    description: "Exercice pratique avancé pour créer une application de gestion de bibliothèque avec interface complète et API.",
    keywords: ["laboratoire", "exercice", "bibliothèque", "livres", "interface", "api", "crud"],
    group: "lab"
}

const htmlStructure = 
`<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion de Bibliothèque</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="app">
        <header class="header">
            <h1>📚 Ma Bibliothèque</h1>
            <div class="search-container">
                <input type="text" id="search-input" placeholder="Rechercher un livre...">
                <button id="search-btn">🔍</button>
            </div>
        </header>
        
        <nav class="nav">
            <button id="view-all" class="nav-btn active">Tous les livres</button>
            <button id="view-add" class="nav-btn">Ajouter un livre</button>
            <button id="view-stats" class="nav-btn">Statistiques</button>
        </nav>
        
        <main class="main">
            <!-- Vue: Liste des livres -->
            <section id="books-view" class="view active">
                <div class="filters">
                    <select id="category-filter">
                        <option value="">Toutes les catégories</option>
                    </select>
                    <select id="status-filter">
                        <option value="">Tous les statuts</option>
                        <option value="disponible">Disponible</option>
                        <option value="emprunte">Emprunté</option>
                        <option value="reserve">Réservé</option>
                    </select>
                    <select id="sort-by">
                        <option value="title">Trier par titre</option>
                        <option value="author">Trier par auteur</option>
                        <option value="year">Trier par année</option>
                        <option value="category">Trier par catégorie</option>
                    </select>
                </div>
                
                <div id="books-container" class="books-grid"></div>
                <div id="pagination" class="pagination"></div>
            </section>
            
            <!-- Vue: Formulaire d'ajout -->
            <section id="add-view" class="view">
                <div class="form-container">
                    <h2>Ajouter un nouveau livre</h2>
                    <form id="book-form" class="book-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="title">Titre *</label>
                                <input type="text" id="title" name="title" required>
                            </div>
                            <div class="form-group">
                                <label for="author">Auteur *</label>
                                <input type="text" id="author" name="author" required>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="isbn">ISBN</label>
                                <input type="text" id="isbn" name="isbn">
                            </div>
                            <div class="form-group">
                                <label for="year">Année de publication</label>
                                <input type="number" id="year" name="year" min="1800" max="2024">
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="category">Catégorie *</label>
                                <select id="category" name="category" required>
                                    <option value="">Sélectionner une catégorie</option>
                                    <option value="fiction">Fiction</option>
                                    <option value="non-fiction">Non-fiction</option>
                                    <option value="science">Science</option>
                                    <option value="histoire">Histoire</option>
                                    <option value="biographie">Biographie</option>
                                    <option value="technologie">Technologie</option>
                                    <option value="art">Art</option>
                                    <option value="philosophie">Philosophie</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="pages">Nombre de pages</label>
                                <input type="number" id="pages" name="pages" min="1">
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea id="description" name="description" rows="4"></textarea>
                        </div>
                        
                        <div class="form-group">
                            <label for="cover-url">URL de la couverture</label>
                            <input type="url" id="cover-url" name="coverUrl">
                        </div>
                        
                        <div class="form-actions">
                            <button type="submit" class="btn btn-primary">Ajouter le livre</button>
                            <button type="button" id="cancel-btn" class="btn btn-secondary">Annuler</button>
                        </div>
                    </form>
                </div>
            </section>
            
            <!-- Vue: Statistiques -->
            <section id="stats-view" class="view">
                <div class="stats-container">
                    <h2>Statistiques de la bibliothèque</h2>
                    <div id="stats-grid" class="stats-grid"></div>
                    <div id="charts-container" class="charts-container"></div>
                </div>
            </section>
        </main>
        
        <!-- Modal pour les détails du livre -->
        <div id="book-modal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <div id="modal-body"></div>
            </div>
        </div>
        
        <!-- Loader -->
        <div id="loader" class="loader hidden">
            <div class="spinner"></div>
            <p>Chargement...</p>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`;

const jsCode = 
`class LibraryApp {
    constructor() {
        this.books = JSON.parse(localStorage.getItem('library-books')) || [];
        this.currentView = 'books';
        this.currentFilters = {
            search: '',
            category: '',
            status: '',
            sortBy: 'title'
        };
        this.currentPage = 1;
        this.booksPerPage = 12;
        
        this.initializeApp();
    }
    
    initializeApp() {
        this.initializeElements();
        this.attachEventListeners();
        this.populateFilters();
        this.showView('books');
        this.renderBooks();
        
        // Ajouter quelques livres de démonstration si la bibliothèque est vide
        if (this.books.length === 0) {
            this.addSampleBooks();
        }
    }
    
    initializeElements() {
        // Navigation
        this.navBtns = document.querySelectorAll('.nav-btn');
        this.views = document.querySelectorAll('.view');
        
        // Recherche et filtres
        this.searchInput = document.getElementById('search-input');
        this.searchBtn = document.getElementById('search-btn');
        this.categoryFilter = document.getElementById('category-filter');
        this.statusFilter = document.getElementById('status-filter');
        this.sortBy = document.getElementById('sort-by');
        
        // Conteneurs
        this.booksContainer = document.getElementById('books-container');
        this.paginationContainer = document.getElementById('pagination');
        this.statsGrid = document.getElementById('stats-grid');
        
        // Formulaire
        this.bookForm = document.getElementById('book-form');
        this.cancelBtn = document.getElementById('cancel-btn');
        
        // Modal
        this.modal = document.getElementById('book-modal');
        this.modalBody = document.getElementById('modal-body');
        this.closeModal = document.querySelector('.close');
        
        // Loader
        this.loader = document.getElementById('loader');
    }
    
    attachEventListeners() {
        // Navigation
        this.navBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const view = e.target.id.replace('view-', '');
                this.showView(view);
            });
        });
        
        // Recherche et filtres
        this.searchInput.addEventListener('input', () => this.handleSearch());
        this.searchBtn.addEventListener('click', () => this.handleSearch());
        this.categoryFilter.addEventListener('change', () => this.handleFilterChange());
        this.statusFilter.addEventListener('change', () => this.handleFilterChange());
        this.sortBy.addEventListener('change', () => this.handleSortChange());
        
        // Formulaire
        this.bookForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
        this.cancelBtn.addEventListener('click', () => this.showView('books'));
        
        // Modal
        this.closeModal.addEventListener('click', () => this.closeBookModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeBookModal();
        });
        
        // Clavier
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeBookModal();
        });
    }
    
    showView(viewName) {
        this.currentView = viewName;
        
        // Mettre à jour la navigation
        this.navBtns.forEach(btn => btn.classList.remove('active'));
        document.getElementById(\`view-\${viewName}\`).classList.add('active');
        
        // Mettre à jour les vues
        this.views.forEach(view => view.classList.remove('active'));
        document.getElementById(\`\${viewName}-view\`).classList.add('active');
        
        // Rendu spécifique selon la vue
        if (viewName === 'stats') {
            this.renderStats();
        } else if (viewName === 'all') {
            this.renderBooks();
        }
    }
    
    handleSearch() {
        this.currentFilters.search = this.searchInput.value.toLowerCase();
        this.currentPage = 1;
        this.renderBooks();
    }
    
    handleFilterChange() {
        this.currentFilters.category = this.categoryFilter.value;
        this.currentFilters.status = this.statusFilter.value;
        this.currentPage = 1;
        this.renderBooks();
    }
    
    handleSortChange() {
        this.currentFilters.sortBy = this.sortBy.value;
        this.renderBooks();
    }
    
    async handleFormSubmit(e) {
        e.preventDefault();
        this.showLoader();
        
        try {
            const formData = new FormData(this.bookForm);
            const bookData = {
                id: Date.now(),
                title: formData.get('title'),
                author: formData.get('author'),
                isbn: formData.get('isbn'),
                year: parseInt(formData.get('year')) || null,
                category: formData.get('category'),
                pages: parseInt(formData.get('pages')) || null,
                description: formData.get('description'),
                coverUrl: formData.get('coverUrl'),
                status: 'disponible',
                addedDate: new Date().toISOString(),
                borrowHistory: []
            };
            
            // Simulation d'un appel API
            await this.delay(1000);
            
            this.addBook(bookData);
            this.bookForm.reset();
            this.showView('books');
            this.showNotification('Livre ajouté avec succès!', 'success');
        } catch (error) {
            this.showNotification('Erreur lors de l\'ajout du livre', 'error');
        } finally {
            this.hideLoader();
        }
    }
    
    addBook(bookData) {
        this.books.push(bookData);
        this.saveToStorage();
        this.populateFilters();
        this.renderBooks();
    }
    
    deleteBook(id) {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) {
            this.books = this.books.filter(book => book.id !== id);
            this.saveToStorage();
            this.renderBooks();
            this.showNotification('Livre supprimé', 'success');
        }
    }
    
    updateBookStatus(id, newStatus) {
        const book = this.books.find(b => b.id === id);
        if (book) {
            book.status = newStatus;
            if (newStatus === 'emprunte') {
                book.borrowHistory.push({
                    borrowedDate: new Date().toISOString(),
                    borrower: prompt('Nom de l\'emprunteur:') || 'Inconnu'
                });
            }
            this.saveToStorage();
            this.renderBooks();
            this.showNotification(\`Statut mis à jour: \${newStatus}\`, 'success');
        }
    }
    
    getFilteredBooks() {
        let filtered = [...this.books];
        
        // Filtre de recherche
        if (this.currentFilters.search) {
            filtered = filtered.filter(book =>
                book.title.toLowerCase().includes(this.currentFilters.search) ||
                book.author.toLowerCase().includes(this.currentFilters.search) ||
                book.category.toLowerCase().includes(this.currentFilters.search)
            );
        }
        
        // Filtre par catégorie
        if (this.currentFilters.category) {
            filtered = filtered.filter(book => book.category === this.currentFilters.category);
        }
        
        // Filtre par statut
        if (this.currentFilters.status) {
            filtered = filtered.filter(book => book.status === this.currentFilters.status);
        }
        
        // Tri
        filtered.sort((a, b) => {
            const field = this.currentFilters.sortBy;
            if (field === 'year') {
                return (b.year || 0) - (a.year || 0);
            }
            return (a[field] || '').localeCompare(b[field] || '');
        });
        
        return filtered;
    }
    
    renderBooks() {
        const filtered = this.getFilteredBooks();
        const startIndex = (this.currentPage - 1) * this.booksPerPage;
        const endIndex = startIndex + this.booksPerPage;
        const booksToShow = filtered.slice(startIndex, endIndex);
        
        this.booksContainer.innerHTML = '';
        
        if (booksToShow.length === 0) {
            this.booksContainer.innerHTML = '<div class="no-books">Aucun livre trouvé</div>';
            return;
        }
        
        booksToShow.forEach(book => {
            const bookCard = this.createBookCard(book);
            this.booksContainer.appendChild(bookCard);
        });
        
        this.renderPagination(filtered.length);
    }
    
    createBookCard(book) {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = \`
            <div class="book-cover">
                <img src="\${book.coverUrl || '/placeholder-book.jpg'}" 
                     alt="\${book.title}" 
                     onerror="this.src='/placeholder-book.jpg'">
            </div>
            <div class="book-info">
                <h3 class="book-title">\${book.title}</h3>
                <p class="book-author">par \${book.author}</p>
                <p class="book-category">\${book.category}</p>
                <div class="book-status status-\${book.status}">
                    \${this.getStatusText(book.status)}
                </div>
                <div class="book-actions">
                    <button onclick="app.showBookDetails(\${book.id})" class="btn btn-info">
                        Détails
                    </button>
                    <button onclick="app.showStatusMenu(\${book.id})" class="btn btn-primary">
                        Statut
                    </button>
                    <button onclick="app.deleteBook(\${book.id})" class="btn btn-danger">
                        Supprimer
                    </button>
                </div>
            </div>
        \`;
        return card;
    }
    
    renderPagination(totalBooks) {
        const totalPages = Math.ceil(totalBooks / this.booksPerPage);
        
        if (totalPages <= 1) {
            this.paginationContainer.innerHTML = '';
            return;
        }
        
        let paginationHTML = '';
        
        if (this.currentPage > 1) {
            paginationHTML += \`<button onclick="app.goToPage(\${this.currentPage - 1})" class="btn">Précédent</button>\`;
        }
        
        for (let i = 1; i <= totalPages; i++) {
            const active = i === this.currentPage ? 'active' : '';
            paginationHTML += \`<button onclick="app.goToPage(\${i})" class="btn \${active}">\${i}</button>\`;
        }
        
        if (this.currentPage < totalPages) {
            paginationHTML += \`<button onclick="app.goToPage(\${this.currentPage + 1})" class="btn">Suivant</button>\`;
        }
        
        this.paginationContainer.innerHTML = paginationHTML;
    }
    
    goToPage(page) {
        this.currentPage = page;
        this.renderBooks();
    }
    
    showBookDetails(id) {
        const book = this.books.find(b => b.id === id);
        if (!book) return;
        
        this.modalBody.innerHTML = \`
            <div class="book-details">
                <div class="book-cover-large">
                    <img src="\${book.coverUrl || '/placeholder-book.jpg'}" alt="\${book.title}">
                </div>
                <div class="book-info-detailed">
                    <h2>\${book.title}</h2>
                    <p><strong>Auteur:</strong> \${book.author}</p>
                    <p><strong>Catégorie:</strong> \${book.category}</p>
                    \${book.isbn ? \`<p><strong>ISBN:</strong> \${book.isbn}</p>\` : ''}
                    \${book.year ? \`<p><strong>Année:</strong> \${book.year}</p>\` : ''}
                    \${book.pages ? \`<p><strong>Pages:</strong> \${book.pages}</p>\` : ''}
                    <p><strong>Statut:</strong> \${this.getStatusText(book.status)}</p>
                    <p><strong>Ajouté le:</strong> \${new Date(book.addedDate).toLocaleDateString()}</p>
                    \${book.description ? \`<div class="book-description"><strong>Description:</strong><br>\${book.description}</div>\` : ''}
                    \${book.borrowHistory.length > 0 ? this.renderBorrowHistory(book.borrowHistory) : ''}
                </div>
            </div>
        \`;
        
        this.modal.style.display = 'flex';
    }
    
    // Continuer avec d'autres méthodes...
    renderStats() {
        const stats = this.calculateStats();
        
        this.statsGrid.innerHTML = \`
            <div class="stat-card">
                <h3>Total des livres</h3>
                <div class="stat-number">\${stats.total}</div>
            </div>
            <div class="stat-card">
                <h3>Disponibles</h3>
                <div class="stat-number">\${stats.available}</div>
            </div>
            <div class="stat-card">
                <h3>Empruntés</h3>
                <div class="stat-number">\${stats.borrowed}</div>
            </div>
            <div class="stat-card">
                <h3>Catégories</h3>
                <div class="stat-number">\${stats.categories}</div>
            </div>
        \`;
    }
    
    // Méthodes utilitaires
    calculateStats() {
        return {
            total: this.books.length,
            available: this.books.filter(b => b.status === 'disponible').length,
            borrowed: this.books.filter(b => b.status === 'emprunte').length,
            categories: new Set(this.books.map(b => b.category)).size
        };
    }
    
    getStatusText(status) {
        const statusMap = {
            'disponible': 'Disponible',
            'emprunte': 'Emprunté',
            'reserve': 'Réservé'
        };
        return statusMap[status] || status;
    }
    
    populateFilters() {
        const categories = [...new Set(this.books.map(b => b.category))].sort();
        this.categoryFilter.innerHTML = '<option value="">Toutes les catégories</option>' +
            categories.map(cat => \`<option value="\${cat}">\${cat}</option>\`).join('');
    }
    
    saveToStorage() {
        localStorage.setItem('library-books', JSON.stringify(this.books));
    }
    
    showLoader() {
        this.loader.classList.remove('hidden');
    }
    
    hideLoader() {
        this.loader.classList.add('hidden');
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    showNotification(message, type = 'info') {
        // Implémentation simple de notification
        const notification = document.createElement('div');
        notification.className = \`notification notification-\${type}\`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
    
    closeBookModal() {
        this.modal.style.display = 'none';
    }
    
    addSampleBooks() {
        const sampleBooks = [
            {
                id: 1,
                title: "Le Petit Prince",
                author: "Antoine de Saint-Exupéry",
                category: "fiction",
                year: 1943,
                status: "disponible",
                addedDate: new Date().toISOString(),
                borrowHistory: []
            },
            {
                id: 2,
                title: "1984",
                author: "George Orwell",
                category: "fiction",
                year: 1949,
                status: "emprunte",
                addedDate: new Date().toISOString(),
                borrowHistory: []
            }
        ];
        
        this.books = sampleBooks;
        this.saveToStorage();
    }
}

// Initialiser l'application
const app = new LibraryApp();`;

export default function Page() {
    return <>
        <section>
            <h2>Objectif du laboratoire</h2>
            <p>
                Ce laboratoire avancé consiste à créer une application complète de gestion de bibliothèque. 
                L'application permettra de gérer un catalogue de livres avec des fonctionnalités de recherche, 
                de filtrage, d'ajout, de modification et de suivi des emprunts.
            </p>
            <ColoredBox title="Compétences avancées développées">
                <ul>
                    <li>Architecture d'application complexe</li>
                    <li>Gestion d'état avancée</li>
                    <li>Interface utilisateur riche et responsive</li>
                    <li>Système de navigation multi-vues</li>
                    <li>Gestion de formulaires complexes</li>
                    <li>Système de pagination</li>
                    <li>Modales et interactions avancées</li>
                    <li>Persistance de données locale</li>
                    <li>Notifications utilisateur</li>
                </ul>
            </ColoredBox>
        </section>

        <section>
            <h2>Structure HTML complète</h2>
            <p>
                L'application nécessite une structure HTML organisée avec plusieurs vues et composants:
            </p>
            <CodeBlock language="html">{htmlStructure}</CodeBlock>
        </section>

        <section>
            <h2>Code JavaScript principal</h2>
            <p>
                Voici la classe principale de l'application avec les fonctionnalités de base:
            </p>
            <CodeBlock language="javascript">{jsCode}</CodeBlock>
            <ColoredBox title="Note">
                Ce code représente la structure de base. Vous devrez implémenter les méthodes manquantes 
                et ajouter les styles CSS appropriés pour obtenir une application complètement fonctionnelle.
            </ColoredBox>
        </section>

        <section>
            <h2>Fonctionnalités à implémenter</h2>
            <h3>Fonctionnalités de base (obligatoires)</h3>
            <ul>
                <li><strong>Catalogue de livres:</strong> Affichage en grille avec pagination</li>
                <li><strong>Ajout de livres:</strong> Formulaire complet avec validation</li>
                <li><strong>Recherche:</strong> Recherche textuelle multi-champs</li>
                <li><strong>Filtrage:</strong> Par catégorie, statut, auteur</li>
                <li><strong>Tri:</strong> Par titre, auteur, année, catégorie</li>
                <li><strong>Gestion des statuts:</strong> Disponible, emprunté, réservé</li>
                <li><strong>Détails des livres:</strong> Modal avec informations complètes</li>
                <li><strong>Statistiques:</strong> Vue d'ensemble de la bibliothèque</li>
            </ul>
            
            <h3>Fonctionnalités avancées (optionnelles)</h3>
            <ul>
                <li><strong>Gestion des emprunts:</strong> Historique, dates de retour</li>
                <li><strong>Système de réservation:</strong> File d'attente pour les livres populaires</li>
                <li><strong>Import/Export:</strong> Formats JSON, CSV</li>
                <li><strong>Codes-barres:</strong> Génération et lecture de codes-barres</li>
                <li><strong>Notifications:</strong> Rappels de retour, nouveautés</li>
                <li><strong>Mode sombre:</strong> Basculement de thème</li>
                <li><strong>Sauvegarde cloud:</strong> Synchronisation avec une API</li>
            </ul>
        </section>

        <section>
            <h2>Structure des données</h2>
            <p>
                Chaque livre dans la base de données doit contenir au minimum:
            </p>
            <CodeBlock language="javascript">
{`const book = {
    id: 12345,                           // Identifiant unique
    title: "Titre du livre",             // Titre (obligatoire)
    author: "Nom de l'auteur",          // Auteur (obligatoire)
    isbn: "978-1234567890",             // ISBN (optionnel)
    year: 2023,                         // Année de publication
    category: "fiction",                // Catégorie (obligatoire)
    pages: 350,                         // Nombre de pages
    description: "Description...",       // Résumé du livre
    coverUrl: "https://...",            // URL de la couverture
    status: "disponible",               // disponible, emprunte, reserve
    addedDate: "2023-01-01T00:00:00Z", // Date d'ajout
    borrowHistory: [                    // Historique des emprunts
        {
            borrowedDate: "2023-06-01T00:00:00Z",
            returnedDate: "2023-06-15T00:00:00Z",
            borrower: "Jean Dupont"
        }
    ]
};`}
            </CodeBlock>
        </section>

        <section>
            <h2>Architecture recommandée</h2>
            <p>
                Organisez votre code selon cette structure:
            </p>
            <ul>
                <li><IC>index.html</IC> - Structure HTML principale</li>
                <li><IC>style.css</IC> - Styles et responsive design</li>
                <li><IC>script.js</IC> - Logique principale de l'application</li>
                <li><IC>models/</IC> - Classes pour les modèles de données (optionnel)</li>
                <li><IC>services/</IC> - Services API et stockage (optionnel)</li>
                <li><IC>utils/</IC> - Fonctions utilitaires (optionnel)</li>
                <li><IC>assets/</IC> - Images, icônes, placeholder</li>
            </ul>
        </section>

        <section>
            <h2>Spécifications techniques</h2>
            <dl>
                <dt><strong>Responsive Design</strong></dt>
                <dd>L'application doit être utilisable sur mobile, tablette et desktop</dd>
                
                <dt><strong>Performance</strong></dt>
                <dd>Pagination pour les grandes collections, lazy loading des images</dd>
                
                <dt><strong>Accessibilité</strong></dt>
                <dd>Support du clavier, labels appropriés, contrastes suffisants</dd>
                
                <dt><strong>Validation</strong></dt>
                <dd>Validation côté client pour tous les formulaires</dd>
                
                <dt><strong>Persistance</strong></dt>
                <dd>Sauvegarde automatique dans localStorage</dd>
                
                <dt><strong>Gestion d'erreurs</strong></dt>
                <dd>Messages d'erreur clairs, fallbacks appropriés</dd>
            </dl>
        </section>

        <section>
            <h2>Tests et validation</h2>
            <p>
                Votre application doit passer ces tests:
            </p>
            <ol>
                <li><strong>Test de fonctionnalité:</strong> Toutes les opérations CRUD fonctionnent</li>
                <li><strong>Test de recherche:</strong> Recherche par titre, auteur, catégorie</li>
                <li><strong>Test de filtrage:</strong> Tous les filtres produisent les résultats attendus</li>
                <li><strong>Test de pagination:</strong> Navigation correcte entre les pages</li>
                <li><strong>Test de persistance:</strong> Les données survivent au rechargement</li>
                <li><strong>Test de validation:</strong> Formulaires rejettent les données invalides</li>
                <li><strong>Test de responsive:</strong> Interface utilisable sur différentes tailles d'écran</li>
                <li><strong>Test de performance:</strong> Chargement rapide avec 1000+ livres</li>
            </ol>
        </section>

        <section>
            <h2>Critères d'évaluation</h2>
            <dl>
                <dt><strong>Fonctionnalité (35%)</strong></dt>
                <dd>Implémentation complète des fonctionnalités requises</dd>
                
                <dt><strong>Interface utilisateur (25%)</strong></dt>
                <dd>Design attrayant, intuitive, et responsive</dd>
                
                <dt><strong>Code et architecture (25%)</strong></dt>
                <dd>Code bien organisé, documenté, et maintenable</dd>
                
                <dt><strong>Fonctionnalités avancées (10%)</strong></dt>
                <dd>Implémentation de fonctionnalités optionnelles</dd>
                
                <dt><strong>Tests et débogage (5%)</strong></dt>
                <dd>Application testée et sans bugs majeurs</dd>
            </dl>
        </section>

        <section>
            <h2>Remise et présentation</h2>
            <ol>
                <li><strong>Code source:</strong> Tous les fichiers dans un dossier <IC>library-app</IC></li>
                <li><strong>Documentation:</strong> <IC>README.md</IC> avec:
                    <ul>
                        <li>Instructions d'installation et d'utilisation</li>
                        <li>Description des fonctionnalités implémentées</li>
                        <li>Défis techniques rencontrés et solutions</li>
                        <li>Fonctionnalités futures possibles</li>
                    </ul>
                </li>
                <li><strong>Données de test:</strong> Base de données avec au moins 20 livres variés</li>
                <li><strong>Présentation:</strong> Démonstration de 10 minutes montrant:
                    <ul>
                        <li>Vue d'ensemble de l'application</li>
                        <li>Fonctionnalités principales</li>
                        <li>Fonctionnalités avancées implémentées</li>
                        <li>Code architecture et points techniques intéressants</li>
                    </ul>
                </li>
            </ol>
        </section>

        <section>
            <h2>Ressources et références</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/fr/docs/Web/API/Storage" target="_blank">MDN - Web Storage API</a></li>
                <li><a href="https://www.openlibrary.org/dev/docs/api/books" target="_blank">Open Library API</a> (pour récupérer des informations sur les livres)</li>
                <li><a href="https://unsplash.com/" target="_blank">Unsplash</a> (pour des images de couvertures de livres)</li>
                <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank">Guide CSS Grid</a></li>
                <li><a href="https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API" target="_blank">Intersection Observer API</a> (pour le lazy loading)</li>
            </ul>
        </section>
    </>
}