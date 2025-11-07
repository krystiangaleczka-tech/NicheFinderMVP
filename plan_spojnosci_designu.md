DLA SPÓJNEGO STYLU
```markdown
# NicheFinder - React 19 Coding Guidelines

## Tech Stack
- React 19 (najnowsza wersja)
- TypeScript
- Tailwind CSS
- Retro/80s/90s aesthetic

## Styling Philosophy

### 1. CSS Variables First
- ZAWSZE używaj CSS variables z pliku `style.css` dla kolorów
- Dostępne kolory: `--retro-pink`, `--retro-purple`, `--retro-blue`, `--retro-teal`, `--retro-green`, `--retro-yellow`, `--retro-orange`, `--retro-dark`, `--retro-cream`
- Przykład: `background: var(--retro-yellow)`

### 2. Inline Styles + Helper Functions
- Dla dynamicznych stylów używaj funkcji pomocniczych zwracających `React.CSSProperties`
- NIE powtarzaj inline styles - stwórz funkcję helper
- Przykład:
```
const getCardGradient = (index: number): React.CSSProperties => {
  const gradients = [
    { background: 'linear-gradient(135deg, var(--retro-pink) 0%, var(--retro-purple) 100%)' },
    { background: 'linear-gradient(135deg, var(--retro-blue) 0%, var(--retro-teal) 100%)' }
  ];
  return gradients[index];
};
```

### 3. Kiedy używać <div> zamiast Custom Components
- Dla prostych kart statystycznych, buttonów - używaj `<div>` lub `<button>` z inline styles
- Custom komponenty (jak `<Card>`) tylko gdy potrzebne są specjalne funkcje (np. `showCorners`)
- Priorytety: czystość kodu > złożoność komponentów

### 4. Buttons
- Używaj natywnego `<button>` zamiast custom `<Button>` component gdy możliwe
- Style przez helper function z CSS variables
- Unicode ikony (`▲`, `▼`) zamiast icon libraries gdy możliwe
- Przykład:
```
const getButtonStyles = (): React.CSSProperties => ({
  background: 'var(--retro-yellow)',
  color: 'var(--retro-dark)',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: 'var(--retro-dark)',
  boxShadow: '4px 4px 0 var(--retro-dark)'
});
```

### 5. Gradients & Colors
- Każda karta statystyczna ma unique gradient
- Gradients zawsze 135deg
- Używaj `linear-gradient()` z CSS variables
- Paleta: pink→purple, blue→teal, green→teal, yellow→orange

## Code Structure Rules

### Component Pattern
```
export const ComponentName: React.FC<Props> = ({ prop }: any) => {
  // 1. State hooks
  const [state, setState] = useState();
  
  // 2. Helper functions dla kolorów/stylów
  const getColor = (name: string) => { ... };
  const getStyles = (): React.CSSProperties => { ... };
  
  // 3. Event handlers
  const handleClick = () => { ... };
  
  // 4. Return JSX
  return ( ... );
};
```

### TypeScript
- Zawsze używaj `React.CSSProperties` dla inline styles
- Type helpers dla Records: `Record<string, string>`
- Interface dla props komponentów

### Tailwind Classes
- Używaj Tailwind dla spacing, layout, typography
- NIE używaj Tailwind dla kolorów (użyj CSS variables)
- Przykład: `className="text-xs font-bold mt-3 px-4 py-2"`

## Remixing Components
Gdy modyfikujesz istniejące komponenty:
1. Zachowaj CSS variables dla kolorów
2. Zamień custom components na native HTML gdy możliwe
3. Stwórz helper functions dla powtarzających się stylów
4. Użyj inline styles przez `style={getStyles()}`
5. Zachowaj retro aesthetic (gradienty, cienie, borders)

## Retro Aesthetic Rules
- Box shadows: `4px 4px 0 var(--retro-dark)`
- Borders: `2px solid var(--retro-dark)`
- Unicode symbols dla ikon: `█`, `■`, `▲`, `▼`, `↑↑`
- Pixel-perfect spacing z Tailwind

## Don'ts
- ❌ NIE używaj hex colors bezpośrednio (użyj CSS variables)
- ❌ NIE powtarzaj inline styles (stwórz helper function)
- ❌ NIE używaj custom components gdy native HTML wystarczy
- ❌ NIE używaj dollar signs `$` dla LaTeX w Markdown
- ❌ NIE mieszaj różnych podejść do stylowania w jednym komponencie
```
