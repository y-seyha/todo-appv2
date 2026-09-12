import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

export default function TodoSearch({
  value = '',
  onChange,
  onClear,
  placeholder = "Search tasks..."
}) {
  return (
    <div className="relative flex items-center">
      <Search className="absolute left-3 text-muted-foreground pointer-events-none size-4" />
      <Input
        type="text"
        className="w-full pl-9 pr-9 h-9 text-sm bg-muted/20 border-border/60 rounded-xl focus-visible:ring-primary/40 placeholder:text-muted-foreground transition-all"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search tasks"
      />
      {value && (
        <div className="absolute right-1 flex items-center">
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-xs"
                  className="size-7 text-muted-foreground hover:text-foreground rounded-lg cursor-pointer"
                  onClick={onClear}
                  aria-label="Clear search input"
                />
              }
            >
              <X className="size-3.5" />
            </TooltipTrigger>
            <TooltipContent side="top">Clear search</TooltipContent>
          </Tooltip>
        </div>
      )}
    </div>
  );
}

