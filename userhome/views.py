from django.shortcuts import render,redirect
from common.models import users
from .models import post

# Create your views here.
def home(request):
    posts = post.objects.all()
    user = users.objects.get(id = request.session['user_id'])
    if request.method =='GET':
        status = False
    if request.method == 'POST':
        if 'posting' in request.POST:
            title = request.POST['title']
            disc = request.POST['disc']
            upost = post(u_title = title,u_dis = disc,User_id=request.session['user_id'])
            upost.save() 
            
    return render (request,'userhome/home.html',{'post_data':posts,'user_data':user})

def prof(request):
    user = users.objects.get(id = request.session['user_id'])
    return render (request,'userhome/profile.html',{'user_data':user})

def log_out(request):
    del request.session ['user_id']
    request.session.flush()
    return redirect('common:home')

def edit(request,u_id):
    user = users.objects.get(id=u_id)
    return render(request,'userhome/edit.html',{'use':user})

def update(request):    
    if request.method == 'POST':
        print('haaaao')
        name = request.POST['n_ame']
        uname = request.POST['u_name']
        pas = request.POST['pas']
        userObj = users.objects.get(id=request.session['user_id']) 
        userObj.name = name
        userObj.uname = uname
        userObj.password = pas       
        # user = users(name=name,uname=uname,password=pas)
        # user.save()
        userObj.save()
      
    return redirect( 'userhome:profile')