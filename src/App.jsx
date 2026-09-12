import { useState } from 'react'
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoSearch from './components/TodoSearch'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { TooltipProvider } from '@/components/ui/tooltip'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Install shadcn components", done: true },
    { id: 2, text: "Explore Base UI & Tailwind v4", done: true },
    { id: 3, text: "Build an interactive Todo App", done: false }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all'); // 'all' | 'active' | 'completed'

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      done: false
    };
    setTodos([newTodo, ...todos]);
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter(todo => !todo.done));
  };

  // Counts
  const totalCount = todos.length;
  const completedCount = todos.filter(t => t.done).length;
  const activeCount = totalCount - completedCount;

  // Filter and search logic
  const filteredTodos = todos.filter(todo => {
    const matchesFilter =
      filter === 'all' ? true :
      filter === 'active' ? !todo.done :
      filter === 'completed' ? todo.done : true;

    const matchesSearch = todo.text.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const filterOptions = [
    { id: 'all', label: 'All', count: totalCount },
    { id: 'active', label: 'Active', count: activeCount },
    { id: 'completed', label: 'Completed', count: completedCount }
  ];

  return (
    <TooltipProvider delay={200}>
      <div className="min-h-screen min-h-dvh bg-background text-foreground flex items-center justify-center p-4 sm:p-6 font-sans selection:bg-primary/20">
        <Card className="w-full max-w-lg my-auto border-border/70 bg-card shadow-2xl rounded-2xl overflow-hidden py-0">
          <CardHeader className="pt-6 pb-4">
            <TodoHeader
              title="Task Flow"
              totalCount={totalCount}
              completedCount={completedCount}
            />
          </CardHeader>

          <CardContent className="flex flex-col gap-4 px-6">
            <TodoInput onAdd={handleAddTodo} />

            <Separator className="opacity-40" />

            <div className="flex flex-col gap-3">
              <TodoSearch
                value={searchQuery}
                onChange={setSearchQuery}
                onClear={() => setSearchQuery('')}
              />

              <TodoFilter
                currentFilter={filter}
                onFilterChange={setFilter}
                options={filterOptions}
              />
            </div>

            <TodoList
              todos={filteredTodos}
              filter={filter}
              searchQuery={searchQuery}
              totalCount={totalCount}
              onToggle={handleToggleTodo}
              onDelete={handleDeleteTodo}
            />
          </CardContent>

          <CardFooter className="py-3 px-6 border-t border-border/40 bg-muted/20">
            <TodoFooter
              activeCount={activeCount}
              completedCount={completedCount}
              onClearCompleted={handleClearCompleted}
            />
          </CardFooter>
        </Card>
      </div>
    </TooltipProvider>
  );
}

export default App;

