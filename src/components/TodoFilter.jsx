import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

export default function TodoFilter({
  currentFilter = 'all',
  onFilterChange,
  options = []
}) {
  return (
    <Tabs
      value={currentFilter}
      onValueChange={(val) => {
        if (val) onFilterChange(val);
      }}
      className="w-full"
    >
      <TabsList className="w-full grid grid-cols-3 h-10 p-1 bg-muted/40 rounded-xl border border-border/50">
        {options.map((tab) => {
          const isActive = currentFilter === tab.id;
          return (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="flex items-center justify-center gap-1.5 rounded-lg text-xs sm:text-sm font-medium cursor-pointer transition-all data-active:bg-background data-active:text-foreground data-active:shadow-sm"
            >
              <span>{tab.label}</span>
              {typeof tab.count === 'number' && (
                <Badge
                  variant={isActive ? "default" : "secondary"}
                  className={`h-4.5 px-1.5 text-[10px] font-semibold rounded-full transition-colors ${
                    isActive ? 'bg-primary text-primary-foreground' : 'bg-muted-foreground/15 text-muted-foreground'
                  }`}
                >
                  {tab.count}
                </Badge>
              )}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}

