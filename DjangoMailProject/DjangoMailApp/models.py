from django.db import models
# Create your models here.

class Feedback(models.Model):
    email = models.CharField(max_length=120)
    review = models.TextField()

    def __str__(self):
        return self.email
