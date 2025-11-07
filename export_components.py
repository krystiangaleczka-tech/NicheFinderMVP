#!/usr/bin/env python3
"""
Script to export all component files to separate .md files
"""

import os
import sys
from pathlib import Path

def export_component_to_md(component_path, output_dir):
    """Export a single component file to markdown"""
    try:
        with open(component_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Get component name from file path
        component_name = Path(component_path).stem
        output_file = output_dir / f"{component_name}.md"
        
        # Create markdown content
        md_content = f"""# {component_name}

```typescript
{content}
```

---
*File: {component_path}*
*Exported: {component_name}.md*
"""
        
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(md_content)
        
        print(f"✅ Exported: {component_name}.md")
        return True
        
    except Exception as e:
        print(f"❌ Error exporting {component_path}: {e}")
        return False

def main():
    """Main function to export all components"""
    components_dir = Path("/Users/krystiangaleczka/Documents/NicheFinderMVP/niche-finder/src/components")
    output_dir = Path("/Users/krystiangaleczka/Documents/NicheFinderMVP/components_export")
    
    # Create output directory
    output_dir.mkdir(exist_ok=True)
    
    # Find all .tsx files
    component_files = []
    for root, dirs, files in os.walk(components_dir):
        for file in files:
            if file.endswith('.tsx'):
                component_files.append(Path(root) / file)
    
    print(f"Found {len(component_files)} component files")
    print(f"Output directory: {output_dir}")
    print("-" * 50)
    
    # Export each component
    success_count = 0
    for component_file in component_files:
        if export_component_to_md(component_file, output_dir):
            success_count += 1
    
    print("-" * 50)
    print(f"✅ Successfully exported {success_count}/{len(component_files)} components")
    print(f"📁 All files saved to: {output_dir}")

if __name__ == "__main__":
    main()