from . import views
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register("socialMedia", views.SocialMediaView , basename="socialMedia")
router.register("posts", views.PostView , basename="post")
router.register("likes", views.LikeView , basename="like")

urlpatterns = [
    
]

urlpatterns += router.urls