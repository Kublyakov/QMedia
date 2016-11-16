React component `<QMedia>` for render depending on width screen.
<br>Example:<br>
`<QMedia query='>960' render={() => <App {...props} />}/> `<br>
In example above App component will be render only if width of screen bigger or equal 960 px.<br>
`<QMedia query='<960' render={() => <App {...props} />}/> `<br>
In this example your component will be render only if width of screen smaller 960 px<br> 
Supports IE8+.