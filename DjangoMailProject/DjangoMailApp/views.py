from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from .serializers import FeedbackSerializers
from django.core.mail import send_mail
from django.conf import settings
from django.core.mail import EmailMessage



# Create your views here.
@csrf_exempt
def submitReview(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        serialized_Data = FeedbackSerializers(data=data)
        if serialized_Data.is_valid():
            email = data['email']
            review = data['review']
            send_mail_for_review((email,review))
            serialized_Data.save()
            return JsonResponse({"msg": "Data got saved !"})
        else:
            return JsonResponse({"msg": serialized_Data.errors})
    return JsonResponse({"msg": "Might be a GET request !"})



def send_mail_for_review(tuple_):
    email = "parimalm4653@gmail.com"
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email]
    msg = (
        f"This reviewer {tuple_[0]} sent you a message from your website.\n{tuple_[1]}"
    )
    email = EmailMessage(
        "From your portfolio site.", msg, email_from, recipient_list
    )
    email.send()
