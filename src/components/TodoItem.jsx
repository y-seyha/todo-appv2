import { Trash2 } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

export default function TodoItem({
  todo,
  index = 0,
  onToggle,
  onDelete
}) {
  const { id, text, done } = todo;

  return (
    <li
      className={`group flex items-center gap-3 p-3 sm:p-3.5 bg-muted/20 hover:bg-muted/40 border border-border/50 hover:border-border rounded-xl transition-all duration-200 animate-item-entrance ${
        done ? 'opacity-70 border-border/30 bg-muted/10' : ''
      }`}
      style={{ animationDelay: `${index * 35}ms` }}
    >
      <div className="flex items-center">
        <Checkbox
          checked={done}
          onCheckedChange={() => onToggle(id)}
          aria-label={`Mark "${text}" as ${done ? 'incomplete' : 'complete'}`}
          className="size-5 rounded-md cursor-pointer data-checked:bg-emerald-500 data-checked:border-emerald-500"
        />
      </div>

      <span
        onClick={() => onToggle(id)}
        className={`flex-1 text-sm sm:text-base leading-snug break-words transition-all duration-200 select-none cursor-pointer ${
          done
            ? 'line-through text-muted-foreground italic'
            : 'text-foreground'
        }`}
      >
        {text}
      </span>

      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              className="size-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg opacity-80 group-hover:opacity-100 transition-all cursor-pointer"
              onClick={() => onDelete(id)}
              aria-label={`Delete task "${text}"`}
            />
          }
        >
          <Trash2 className="size-4" />
        </TooltipTrigger>
        <TooltipContent side="top">Delete task</TooltipContent>
      </Tooltip>
    </li>
  );
}

