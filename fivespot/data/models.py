from __future__ import unicode_literals
from django.template.defaultfilters import slugify 
from django.db import models

# Create your models here.
class User(models.Model):
	name = models.CharField(max_length=100)
	email = models.EmailField(max_length=100)
	slug = models.SlugField(max_length=200, null=True)
	def save(self, *args, **kwargs):
		self.slug = slugify(self.name)
		super(User, self).save(*args, **kwargs)


	def __str__(self):
		return self.name

	


class Posts(models.Model):
	user = models.ForeignKey(User, null=True)
	title = models.CharField(max_length=100)
	description = models.TextField(max_length=500)
	created_at = models.DateTimeField(auto_now_add=True)
	sub1 = models.CharField(max_length=100, null=True)
	body1 = models.TextField(max_length=600, null=True)
	lat1 = models.DecimalField(max_digits=22, decimal_places=16, null=True)
	long1 = models.DecimalField(max_digits=22, decimal_places=16, null=True)
	sub2 = models.CharField(max_length=100, null=True)
	body2 = models.TextField(max_length=600, null=True)
	lat2 = models.DecimalField(max_digits=22, decimal_places=16, null=True)
	long2 = models.DecimalField(max_digits=22, decimal_places=16, null=True)
	sub3 = models.CharField(max_length=100, null=True)
	body3 = models.TextField(max_length=600, null=True)
	lat3 = models.DecimalField(max_digits=22, decimal_places=16, null=True)
	long3 = models.DecimalField(max_digits=22, decimal_places=16, null=True)
	sub4 = models.CharField(max_length=100, null=True)
	body4 = models.TextField(max_length=600, null=True)
	lat4 = models.DecimalField(max_digits=22, decimal_places=16, null=True)
	long4 = models.DecimalField(max_digits=22, decimal_places=16, null=True)
	sub5 = models.CharField(max_length=100, null=True)
	body5 = models.TextField(max_length=600, null=True)
	lat5 = models.DecimalField(max_digits=22, decimal_places=16, null=True)
	long5 = models.DecimalField(max_digits=22, decimal_places=16, null=True)
	slug = models.SlugField(max_length=200, null=True)

	def save(self, *args, **kwargs):
		self.slug = slugify(self.title)
		super(Posts, self).save(*args, **kwargs)


	def __str__(self):
		return self.title
