from django.db import models
from django.db import models


class SocialMedia(models.Model):
    name = models.CharField(max_length=100)
    url = models.URLField()
    about = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Post(models.Model):
    posts = models.ForeignKey(SocialMedia, on_delete=models.CASCADE, related_name='posts')
    title = models.CharField(max_length=255)
    description = models.TextField()
    likes = models.PositiveIntegerField(default=0)
    shares = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} - {self.posts.name}"
    
class Like(models.Model):
    liked_post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='liked_post')
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.liked_post.title} - {self.created_at}"
    
class Share(models.Model):
    shared_post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='shared_post')
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.shared_post.title} - {self.created_at}"



class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    name = models.CharField(max_length=100)
    email = models.EmailField()
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.post.title}"


