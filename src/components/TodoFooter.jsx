import { Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function TodoFooter({
  activeCount = 0,
  completedCount = 0,
  onClearCompleted
}) {
  return (
    <footer className="w-full flex items-center justify-between text-xs text-muted-foreground">
      <span className="font-medium">
        {activeCount} {activeCount === 1 ? 'task' : 'tasks'} remaining
      </span>

      {completedCount > 0 && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-7 px-2.5 text-xs text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors cursor-pointer gap-1.5"
          onClick={onClearCompleted}
        >
          <Trash2 className="size-3.5" />
          <span>Clear completed</span>
          <Badge variant="secondary" className="h-4 px-1.5 text-[10px] rounded-full font-normal">
            {completedCount}
          </Badge>
        </Button>
      )}
    </footer>
  );
}

