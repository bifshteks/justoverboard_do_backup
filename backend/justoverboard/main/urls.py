from django.urls import re_path
from main.views import MainView, get_tracks

urlpatterns = [
	re_path(r'^$', MainView.as_view(), name='index'),
	re_path(r'^tracks/$', get_tracks, name='get_tracks'),
]