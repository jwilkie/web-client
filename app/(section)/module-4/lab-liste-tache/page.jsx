import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import { WebExample, Code } from '@/components/WebExample';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Liste de tâches avec interface",
    description: "Exercice pratique pour créer une application de liste de tâches complète avec interface utilisateur interactive.",
    keywords: ["laboratoire", "exercice", "todo", "liste", "tâches", "interface", "crud"],
    group: "lab"
}

const htmlStructure = 
`<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste de Tâches</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Ma Liste de Tâches</h1>
        
        <!-- Formulaire d'ajout -->
        <form id="todo-form" class="todo-form">
            <input type="text" id="todo-input" placeholder="Nouvelle tâche..." required>
            <button type="submit">Ajouter</button>
        </form>
        
        <!-- Filtres -->
        <div class="filters">
            <button id="filter-all" class="filter-btn active">Toutes</button>
            <button id="filter-pending" class="filter-btn">En attente</button>
            <button id="filter-completed" class="filter-btn">Terminées</button>
        </div>
        
        <!-- Liste des tâches -->
        <ul id="todo-list" class="todo-list"></ul>
        
        <!-- Statistiques -->
        <div class="stats">
            <span id="stats-total">0 tâches</span> | 
            <span id="stats-pending">0 en attente</span> | 
            <span id="stats-completed">0 terminées</span>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`;

const cssStyles = 
`.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

/* Formulaire */
.todo-form {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

#todo-input {
    flex: 1;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
}

#todo-input:focus {
    outline: none;
    border-color: #007bff;
}

button {
    padding: 12px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.2s;
}

.todo-form button {
    background-color: #007bff;
    color: white;
}

.todo-form button:hover {
    background-color: #0056b3;
}

/* Filtres */
.filters {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    justify-content: center;
}

.filter-btn {
    background-color: #e9ecef;
    color: #6c757d;
    border: 2px solid transparent;
}

.filter-btn.active {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
}

/* Liste */
.todo-list {
    list-style: none;
    padding: 0;
}

.todo-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    margin-bottom: 10px;
    background-color: #f8f9fa;
}

.todo-item.completed {
    background-color: #e8f5e8;
    text-decoration: line-through;
    opacity: 0.7;
}

.todo-text {
    flex: 1;
    font-size: 16px;
}

.todo-actions {
    display: flex;
    gap: 5px;
}

.btn-complete {
    background-color: #28a745;
    color: white;
    font-size: 12px;
    padding: 6px 10px;
}

.btn-delete {
    background-color: #dc3545;
    color: white;
    font-size: 12px;
    padding: 6px 10px;
}

.btn-complete:hover {
    background-color: #218838;
}

.btn-delete:hover {
    background-color: #c82333;
}

/* Statistiques */
.stats {
    text-align: center;
    margin-top: 20px;
    padding: 15px;
    background-color: #e9ecef;
    border-radius: 6px;
    font-weight: 500;
}

/* États cachés */
.hidden {
    display: none !important;
}`;

const javascriptCode = 
`class TodoApp {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.currentFilter = 'all';
        this.initializeElements();
        this.attachEventListeners();
        this.render();
    }
    
    initializeElements() {
        this.todoForm = document.getElementById('todo-form');
        this.todoInput = document.getElementById('todo-input');
        this.todoList = document.getElementById('todo-list');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.statsTotal = document.getElementById('stats-total');
        this.statsPending = document.getElementById('stats-pending');
        this.statsCompleted = document.getElementById('stats-completed');
    }
    
    attachEventListeners() {
        this.todoForm.addEventListener('submit', (e) => this.addTodo(e));
        
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.id.replace('filter-', '')));
        });
    }
    
    addTodo(e) {
        e.preventDefault();
        const text = this.todoInput.value.trim();
        
        if (text === '') return;
        
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toISOString()
        };
        
        this.todos.push(newTodo);
        this.todoInput.value = '';
        this.saveToLocalStorage();
        this.render();
    }
    
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveToLocalStorage();
            this.render();
        }
    }
    
    deleteTodo(id) {
        if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
            this.todos = this.todos.filter(t => t.id !== id);
            this.saveToLocalStorage();
            this.render();
        }
    }
    
    setFilter(filter) {
        this.currentFilter = filter;
        
        // Mettre à jour les boutons de filtre
        this.filterBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById(\`filter-\${filter}\`).classList.add('active');
        
        this.render();
    }
    
    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'pending':
                return this.todos.filter(todo => !todo.completed);
            case 'completed':
                return this.todos.filter(todo => todo.completed);
            default:
                return this.todos;
        }
    }
    
    render() {
        this.renderTodos();
        this.renderStats();
    }
    
    renderTodos() {
        const filteredTodos = this.getFilteredTodos();
        
        this.todoList.innerHTML = '';
        
        if (filteredTodos.length === 0) {
            const emptyMessage = document.createElement('li');
            emptyMessage.className = 'empty-message';
            emptyMessage.textContent = this.getEmptyMessage();
            emptyMessage.style.textAlign = 'center';
            emptyMessage.style.color = '#6c757d';
            emptyMessage.style.fontStyle = 'italic';
            emptyMessage.style.padding = '20px';
            this.todoList.appendChild(emptyMessage);
            return;
        }
        
        filteredTodos.forEach(todo => {
            const li = document.createElement('li');
            li.className = \`todo-item \${todo.completed ? 'completed' : ''}\`;
            
            li.innerHTML = \`
                <span class="todo-text">\${todo.text}</span>
                <div class="todo-actions">
                    <button class="btn-complete" onclick="app.toggleTodo(\${todo.id})">
                        \${todo.completed ? 'Annuler' : 'Terminé'}
                    </button>
                    <button class="btn-delete" onclick="app.deleteTodo(\${todo.id})">
                        Supprimer
                    </button>
                </div>
            \`;
            
            this.todoList.appendChild(li);
        });
    }
    
    renderStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const pending = total - completed;
        
        this.statsTotal.textContent = \`\${total} tâche\${total !== 1 ? 's' : ''}\`;
        this.statsPending.textContent = \`\${pending} en attente\`;
        this.statsCompleted.textContent = \`\${completed} terminée\${completed !== 1 ? 's' : ''}\`;
    }
    
    getEmptyMessage() {
        switch (this.currentFilter) {
            case 'pending':
                return 'Aucune tâche en attente';
            case 'completed':
                return 'Aucune tâche terminée';
            default:
                return 'Aucune tâche pour le moment';
        }
    }
    
    saveToLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
}

// Initialiser l'application
const app = new TodoApp();`;

const apiVersion = 
`// Version avec API (optionnelle)
class TodoAPIService {
    constructor(baseURL = 'http://localhost:3000/api') {
        this.baseURL = baseURL;
    }
    
    async getAllTodos() {
        try {
            const response = await fetch(\`\${this.baseURL}/todos\`);
            if (!response.ok) throw new Error('Erreur lors de la récupération des tâches');
            return await response.json();
        } catch (error) {
            console.error('Erreur API:', error);
            throw error;
        }
    }
    
    async createTodo(todoData) {
        try {
            const response = await fetch(\`\${this.baseURL}/todos\`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(todoData)
            });
            if (!response.ok) throw new Error('Erreur lors de la création de la tâche');
            return await response.json();
        } catch (error) {
            console.error('Erreur API:', error);
            throw error;
        }
    }
    
    async updateTodo(id, updates) {
        try {
            const response = await fetch(\`\${this.baseURL}/todos/\${id}\`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updates)
            });
            if (!response.ok) throw new Error('Erreur lors de la mise à jour de la tâche');
            return await response.json();
        } catch (error) {
            console.error('Erreur API:', error);
            throw error;
        }
    }
    
    async deleteTodo(id) {
        try {
            const response = await fetch(\`\${this.baseURL}/todos/\${id}\`, {
                method: 'DELETE'
            });
            if (!response.ok) throw new Error('Erreur lors de la suppression de la tâche');
        } catch (error) {
            console.error('Erreur API:', error);
            throw error;
        }
    }
}`;

export default function Page() {
    return <>
        <section>
            <h2>Objectif du laboratoire</h2>
            <p>
                Dans ce laboratoire, vous allez créer une application complète de gestion de liste de tâches 
                avec une interface utilisateur interactive. Cette application permettra d'ajouter, modifier, 
                supprimer et filtrer des tâches.
            </p>
            <ColoredBox title="Compétences développées">
                <ul>
                    <li>Manipulation du DOM</li>
                    <li>Gestion des événements</li>
                    <li>Stockage local (localStorage)</li>
                    <li>Création d'interfaces utilisateur dynamiques</li>
                    <li>Programmation orientée objet en JavaScript</li>
                    <li>Utilisation de l'API Fetch (version avancée)</li>
                </ul>
            </ColoredBox>
        </section>

        <section>
            <h2>Structure HTML</h2>
            <p>
                Commencez par créer la structure HTML de base pour votre application:
            </p>
            <CodeBlock language="html">{htmlStructure}</CodeBlock>
        </section>

        <section>
            <h2>Styles CSS</h2>
            <p>
                Ajoutez les styles pour rendre votre application attrayante et fonctionnelle:
            </p>
            <CodeBlock language="css">{cssStyles}</CodeBlock>
        </section>

        <section>
            <h2>Code JavaScript</h2>
            <p>
                Voici le code JavaScript complet pour une application de liste de tâches fonctionnelle:
            </p>
            <CodeBlock language="javascript">{javascriptCode}</CodeBlock>
        </section>

        <section>
            <h2>Fonctionnalités de base</h2>
            <p>
                L'application inclut les fonctionnalités suivantes:
            </p>
            <ul>
                <li><strong>Ajouter des tâches:</strong> Saisie de nouvelles tâches via un formulaire</li>
                <li><strong>Marquer comme terminé:</strong> Basculer l'état des tâches</li>
                <li><strong>Supprimer des tâches:</strong> Retirer définitivement des tâches</li>
                <li><strong>Filtrer les tâches:</strong> Afficher toutes, en attente, ou terminées</li>
                <li><strong>Statistiques:</strong> Compteur de tâches par catégorie</li>
                <li><strong>Persistance:</strong> Sauvegarde automatique dans localStorage</li>
            </ul>
        </section>

        <section>
            <h2>Extensions suggérées</h2>
            <p>
                Une fois la version de base terminée, vous pouvez ajouter ces fonctionnalités:
            </p>
            <ol>
                <li><strong>Édition en place:</strong> Double-clic pour modifier le texte d'une tâche</li>
                <li><strong>Dates d'échéance:</strong> Ajouter des dates limites aux tâches</li>
                <li><strong>Catégories:</strong> Organiser les tâches par catégories</li>
                <li><strong>Priorités:</strong> Système de priorité (haute, moyenne, basse)</li>
                <li><strong>Recherche:</strong> Barre de recherche pour filtrer par texte</li>
                <li><strong>Import/Export:</strong> Exporter en JSON ou importer depuis un fichier</li>
                <li><strong>Notifications:</strong> Rappels pour les tâches importantes</li>
                <li><strong>Drag & Drop:</strong> Réorganiser les tâches par glisser-déposer</li>
            </ol>
        </section>

        <section>
            <h2>Version avec API (Avancée)</h2>
            <p>
                Pour les étudiants avancés, voici une classe de service pour intégrer une API REST:
            </p>
            <CodeBlock language="javascript">{apiVersion}</CodeBlock>
            <p>
                Pour utiliser cette version, vous devez:
            </p>
            <ol>
                <li>Créer un serveur API simple (avec Node.js/Express par exemple)</li>
                <li>Remplacer les opérations localStorage par des appels API</li>
                <li>Gérer les états de chargement et les erreurs réseau</li>
                <li>Ajouter des indicateurs visuels pour les opérations en cours</li>
            </ol>
        </section>

        <section>
            <h2>Critères d'évaluation</h2>
            <dl>
                <dt><strong>Fonctionnalité (40%)</strong></dt>
                <dd>Toutes les opérations CRUD fonctionnent correctement</dd>
                
                <dt><strong>Interface utilisateur (30%)</strong></dt>
                <dd>Design propre, responsive, et convivial</dd>
                
                <dt><strong>Code (20%)</strong></dt>
                <dd>Code bien structuré, commenté, et maintenable</dd>
                
                <dt><strong>Gestion d'erreurs (10%)</strong></dt>
                <dd>Validation des données et gestion des cas d'erreur</dd>
            </dl>
        </section>

        <section>
            <h2>Instructions de remise</h2>
            <ol>
                <li>Créez un dossier nommé <IC>todo-app</IC></li>
                <li>Incluez les fichiers: <IC>index.html</IC>, <IC>style.css</IC>, <IC>script.js</IC></li>
                <li>Ajoutez un fichier <IC>README.md</IC> expliquant:
                    <ul>
                        <li>Comment lancer l'application</li>
                        <li>Les fonctionnalités implémentées</li>
                        <li>Les défis rencontrés et solutions trouvées</li>
                    </ul>
                </li>
                <li>Testez votre application dans différents navigateurs</li>
                <li>Préparez une démonstration de 5 minutes</li>
            </ol>
        </section>

        <section>
            <h2>Ressources utiles</h2>
            <ul>
                <li><a href="https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage" target="_blank">MDN - localStorage</a></li>
                <li><a href="https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector" target="_blank">MDN - Sélecteurs DOM</a></li>
                <li><a href="https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener" target="_blank">MDN - Événements</a></li>
                <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">Guide Flexbox</a></li>
            </ul>
        </section>
    </>
}