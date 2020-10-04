from flask import Flask,render_template,url_for,request,redirect,flash,session
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite://///home/paras/one.db'
app.config['SQLALCHEMY_BINDS'] = {
    'my_sql1': 'sqlite://///home/paras/two.db',
    'my_sql2': 'sqlite://///home/paras/three.db'
    
}
app.config['SECRET_KEY'] = '9OLWxND4o83j4K4iuopO'
db=SQLAlchemy(app)
class regestration(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    username=db.Column(db.String(200), nullable=False)
    email=db.Column(db.String(200), nullable=False)
    password=db.Column(db.String(200),nullable=False)
    def __init__(self,username,email,password):
        self.username=username
        self.email=email
        self.password=password
@app.route('/')
def index():
    session['log']=False
    return render_template('index.html')
@app.route('/login',methods=['Post','Get'])
def login():
    if request.method=="POST":
        username=request.form['uname']
        password=request.form['psw']
        registered_user = regestration.query.filter_by(username=username,password=password).first()
        if registered_user is None:
            flash('Username or Password is invalid' , 'error')
            return redirect('/login')
        else:
            session['log']=True
            return redirect('/task')
    else:
        return render_template('login.html')
@app.route('/register',methods=['Post','Get'])
def register():
    if request.method=='POST':
        username=request.form['username']
        email=request.form['email']
        password=request.form['psw']
        new_task=regestration(username,email,password)
        try: 
            db.session.add(new_task)
            db.session.commit()
            return redirect('/login')
        except:
            return "error"
    else:
        return render_template("register.html")
class Todo(db.Model):
    __bind_key__='my_sql1'
    id=db.Column(db.Integer,primary_key=True)
    content=db.Column(db.String(200), nullable=False)
    completed=db.Column(db.Integer,default=0)
    datecreated=db.Column(db.DateTime,default=datetime.utcnow)   
    def __repr__(self):
        return '<Task %r>' % self.id
@app.route('/task',methods=['Post','Get'])
def afterlogin():
    if session['log']==True:
        if request.method=='POST':
            task_content=request.form['content']
            new_task=Todo(content=task_content)
            try:
                db.session.add(new_task)
                db.session.commit()
                return redirect('/task')
            except:
                return "error"
        else:
            tasks=Todo.query.order_by(Todo.datecreated).all()
            return render_template("afterlogin.html",tasks=tasks)
    else:
        flash('please login')
        return render_template('warning.html')
@app.route('/delete/<int:id>')
def delete(id):
    task_to_delete=Todo.query.get_or_404(id)
    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect('/task')
    except:
        return "error1"
@app.route('/update/<int:id>',methods=['Get','Post'])
def update(id):
    task=Todo.query.get_or_404(id)
    if request.method=="POST":
        task.content=request.form['content']
        try:
            db.session.commit()
            return redirect('/task')
        except:
            return "error2"
    else:
        return render_template('update.html',task=task)
@app.route('/logout')
def logout():
    session['log']=False
    return render_template('warning.html')
if __name__=='__main__':
    app.run(debug=True)