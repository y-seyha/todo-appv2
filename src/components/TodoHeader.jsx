import { CheckCircle2, ListTodo } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function TodoHeader({
  title = "Task Flow",
  subtitle,
  totalCount = 0,
  completedCount = 0
}) {
  const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const displaySubtitle = subtitle || new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

  return (
    <header className="flex flex-col gap-3.5">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-inner">
            <ListTodo className="size-5" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              {title}
            </h1>
            <p className="text-xs text-muted-foreground mt-0.5">
              {displaySubtitle}
            </p>
          </div>
        </div>

        <Badge
          variant="outline"
          className="text-xs font-medium px-2.5 py-1 text-emerald-400 border-emerald-500/30 bg-emerald-500/10 gap-1.5 whitespace-nowrap shadow-xs"
        >
          <CheckCircle2 className="size-3.5 text-emerald-400" />
          <span>{completedCount} of {totalCount} Done</span>
        </Badge>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between text-[11px] text-muted-foreground font-medium">
          <span>Progress</span>
          <span>{percent}%</span>
        </div>
        <div
          className="w-full h-1.5 bg-muted/70 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="h-full bg-gradient-to-r from-primary via-primary/80 to-emerald-400 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </header>
  );
}

