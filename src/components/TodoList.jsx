import { Inbox, CheckCircle2, SearchX } from 'lucide-react'
import TodoItem from './TodoItem'

export default function TodoList({
  todos = [],
  filter = 'all',
  searchQuery = '',
  totalCount = 0,
  onToggle,
  onDelete
}) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-10 px-4 text-sm text-muted-foreground bg-muted/15 rounded-xl border border-dashed border-border/70 flex flex-col items-center justify-center gap-2 animate-list-entrance">
        {searchQuery ? (
          <>
            <SearchX className="size-8 text-muted-foreground/60 mb-1" />
            <p className="font-medium text-foreground/80">No tasks found</p>
            <p className="text-xs text-muted-foreground">No matches for &quot;{searchQuery}&quot;</p>
          </>
        ) : totalCount === 0 ? (
          <>
            <Inbox className="size-8 text-muted-foreground/60 mb-1" />
            <p className="font-medium text-foreground/80">All clear!</p>
            <p className="text-xs text-muted-foreground">Add a new task above to get started.</p>
          </>
        ) : (
          <>
            <CheckCircle2 className="size-8 text-muted-foreground/60 mb-1" />
            <p className="font-medium text-foreground/80">No {filter} tasks</p>
            <p className="text-xs text-muted-foreground">Check your other filters to see more tasks.</p>
          </>
        )}
      </div>
    );
  }

  return (
    <div key={filter} className="animate-list-entrance">
      <ul className="flex flex-col gap-2 max-h-[380px] overflow-y-auto pr-1">
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}

