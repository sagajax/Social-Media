from django.shortcuts import render
from rest_framework import viewsets
from . import models
from . import serializers

# Create your views here.

class SocialMediaView(viewsets.ModelViewSet):
    queryset = models.SocialMedia.objects.all()
    serializer_class = serializers.SocialMediaSerializer


class PostView(viewsets.ModelViewSet):
    queryset = models.Post.objects.all()
    serializer_class = serializers.PostSerializer
    
class LikeView(viewsets.ModelViewSet):
    queryset = models.Like.objects.all()
    serializer_class = serializers.LikeSerializer
    