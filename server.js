app.use(express.static('./dist/lead-first-app'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/lead-first-app/'});
});
app.listen(process.env.PORT || 8080);