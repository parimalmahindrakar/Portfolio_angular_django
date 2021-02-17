from rest_framework.serializers import ModelSerializer
from .models import Feedback


class FeedbackSerializers(ModelSerializer):
    class Meta:
        model = Feedback
        fields = [
            'email', 'review'
        ]



