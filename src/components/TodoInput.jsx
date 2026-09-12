import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function TodoInput({
  onAdd,
  placeholder = "Add a new task...",
  buttonText = "Add"
}) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText('');
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <Input
        type="text"
        className="h-10 text-sm bg-muted/30 border-border/70 focus-visible:ring-primary/40 rounded-xl"
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="New task input"
      />
      <Button
        type="submit"
        className="h-10 px-4 rounded-xl font-medium shrink-0 cursor-pointer shadow-sm transition-all"
        disabled={!text.trim()}
        title="Add task"
      >
        <Plus className="size-4" />
        <span>{buttonText}</span>
      </Button>
    </form>
  );
}

