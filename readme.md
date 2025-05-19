# TODO Project (redo)
## Thinking outloud
### Main list that is initialized on startup
- I only want defined behaviour, meaning that I don't want these constructures to take any params.
- I only want them to add items when I want them to, and remove them when I want them to.

## Guidelines
1. 'Todos' are objects that are created dynamically, which means either using either factories or constructors/classes to generate.
2. The class contains the following:
    - title
    - description
    - dueDate
    - priority
3. Todo list must have `projects` or separate lists of `todos`.
    - Todo items are by default put into a "default" folder.
    - Users should be able to create new `projects` and put `todos` wherever they please
4. You should separate application logic from DOM-related stuff (separate modules)
    - Creating new todos should be separate from drawing the items.
    - Changing todo priority should be different.
5. User interface should be able to do the following:
    - View all projects
    - View all todos in each project (probably just title and due-date)
    - Expand a single todo to see/edit its details
    - Delete a todo item
6. Consider using date-fns for formatting/manipulating dates and times
7. Implement web storage API using localStorage... (once i've set everything else up)
