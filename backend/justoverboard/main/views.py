from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.http import JsonResponse
from django.core import serializers


class MainView(TemplateView):
    template_name = 'index.html'

def get_tracks(request):
    tracks = [
   {
      "id": 1,
      "title": "Lake",
      "duration": 200,
      "bpm": 120,
      "ganre": [
         "Lo-fi hip hop",
         "death core"
      ],
      "tags": [
         "cool",
         "chill",
         "anime"
      ],
      "cost": 200,
      "url": "http://www.schillmania.com/projects/soundmanager2/demo/_mp3/rain.mp3"
   },
   {
      "id": 2,
      "title": "angel",
      "duration": 230,
      "bpm": 110,
      "ganre": [
         "Classic rock"
      ],
      "tags": [
         "brutal",
         "relax"
      ],
      "cost": 1500,
      "url": "http://www.schillmania.com/projects/soundmanager2/demo/_mp3/walking.mp3"
   },
   {
      "id": 3,
      "title": "Corbon",
      "duration": 180,
      "bpm": 100,
      "ganre": [
         "RnB",
         "Rap"
      ],
      "tags": [
         "speed",
         "games",
         "cars",
         "new wave"
      ],
      "cost": 1000,
      "url": "http://www.schillmania.com/projects/soundmanager2/demo/_mp3/carl-3-barlp.mp3"
   },
   {
      "id": 4,
      "title": "From hell to heaven",
      "duration": 315,
      "bpm": 125,
      "ganre": [
         "Classic rock",
         "death core"
      ],
      "tags": [
         "60th",
         "like doors"
      ],
      "cost": 300,
      "url": "http://www.schillmania.com/projects/soundmanager2/demo/_mp3/Mak.mp3"
   },
   {
      "id": 5,
      "title": "what am i",
      "duration": 205,
      "bpm": 165,
      "ganre": [
         "rythmical",
         "thoughtsful music"
      ],
      "tags": [
         "yeah boy",
         "think about it",
         "real talk"
      ],
      "cost": 3100,
      "url": "http://www.schillmania.com/projects/soundmanager2/demo/_mp3/Things%20that%20open,%20close%20and%20roll.mp3"
   },
   {
      "id": 6,
      "title": "if not this then what",
      "duration": 165,
      "bpm": 90,
      "ganre": [
         "depressive"
      ],
      "tags": [
         "listen and die"
      ],
      "cost": 700,
      "url": "http://www.schillmania.com/projects/soundmanager2/demo/_mp3/rain.mp3"
   },
   {
      "id": 7,
      "title": "for what is worth",
      "duration": 153,
      "bpm": 95,
      "ganre": [
         "indie-rock"
      ],
      "tags": [
         "placebo forever",
         "brayan molko"
      ],
      "cost": 5000,
      "url": "http://www.schillmania.com/projects/soundmanager2/demo/_mp3/rain.mp3"
   }
]
    return JsonResponse(tracks, safe=False)
