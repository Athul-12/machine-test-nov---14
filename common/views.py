from django.shortcuts import render,redirect
from . models import users


# Create your views here.

def home(request):
    
    return render (request,'common/home.html')

def reg(request):
    msg=''
    if request.method == 'POST':
        name = request.POST['fname']
        uname = request.POST['u_name']
        psw = request.POST['psw']
        user = users(name = name,uname = uname,password = psw)
        user.save()
        msg='account create successfully'
        return render (request,'common/signin.html',{'success':msg})
    return render (request,'common/register.html')

def sign(request):
    msg=''
    if request.method == 'POST':
        username = request.POST['u_name']
        userpass = request.POST['pass']

        try:
            userlogin = users.objects.get(uname = username,password = userpass)
            request.session['user_id'] = userlogin.id
            return redirect("userhome:home")
        except:
            msg = 'invalid username or password'
    return render (request,'common/signin.html',{'error':msg})