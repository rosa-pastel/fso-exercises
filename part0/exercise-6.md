````
```mermaid
sequenceDiagram
participant browser
participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: note created
    deactivate server

    Note right of browser: The browser executes the JavaScript code that adds note element to the DOM
```
````

```mermaid
sequenceDiagram
participant browser
participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: note created
    deactivate server

    Note right of browser: The browser executes the JavaScript code that adds note element to the DOM
```
