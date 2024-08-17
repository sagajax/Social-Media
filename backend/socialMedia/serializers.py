from rest_framework import serializers
from . import models

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Like
        fields = ["id","liked_post", "created_at"]
        
class ShareSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Share
        fields = ["id","shared_post", "created_at"]


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Comment
        fields = ["id","name", "email", "body", "created_at"]
        

class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True)
    class Meta:
        model = models.Post
        fields = ["id","posts", "title", "description", "likes", "shares", "created_at", "updated_at" , "comments"]

class SocialMediaSerializer(serializers.ModelSerializer):
    posts = PostSerializer(many=True)

    class Meta:
        model = models.SocialMedia
        fields = ["id","name", "url", "posts",  "about", "created_at", "updated_at"]
    # def create(self, validated_data):
    #     posts_data = validated_data.pop('posts', [])
    #     social_media = models.SocialMedia.objects.create(**validated_data)

    #     for post_data in posts_data:
    #         models.Post.objects.create(social_media=social_media, **post_data)

    #     return social_media
