from django.urls import path
from .import views
app_name='userhome'


urlpatterns = [
    path('home',views.home, name='home'),
    path('prof',views.prof, name='profile'),
    path('logout/',views.log_out, name='logout'),
    path('edit/<int:u_id>',views.edit,name='edit'),
    path('update',views.update,name='update')
]   