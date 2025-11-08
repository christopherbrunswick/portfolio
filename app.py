from flask import Flask, render_template
import datetime


app = Flask(__name__, static_folder='static')

#app.wsgi_app = WhiteNoise(app.wsgi_app, root="static/", prefix="static/")

@app.route('/')
def index():
    current_year_index = datetime.date.today().year
    return render_template('index.html', year=current_year_index)

@app.route('/projects')
def projects():
    current_year_project = datetime.date.today().year
    return render_template('projects.html', year=current_year_project)

if __name__ == '__main__':
    app.run(debug=True)
