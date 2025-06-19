ReactDOM.render(
  React.createElement(
    'div', // Um elemento 'div' para agrupar os títulos
    null,
    React.createElement(
      'h1',
      null,
      'Hello World'
    ),
    React.createElement(
      'h2', // Novo elemento h2
      null,
      'Meu subtítulo'
    )
  ),
  document.getElementById('conteudo')
);
