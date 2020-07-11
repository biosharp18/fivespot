from __future__ import unicode_literals
from django.template.defaultfilters import slugify 
from django.db import models

# Create your models here.
class User(models.Model):
	Name = models.CharField(max_length=100)
	Email = models.EmailField(max_length=100)

	def save(self, *args, **kwargs):
		self.slug = slugify(self.Name)
		super(User, self).save(*args, **kwargs)


	def __str__(self):
		return self.Name

	


class Posts(models.Model):
	user = models.ForeignKey(User, null=True)
	Title = models.CharField(max_length=100)
	Description = models.TextField(max_length=500)
	created_at = models.DateTimeField(auto_now_add=True)

	def save(self, *args, **kwargs):
		self.slug = slugify(self.Title)
		super(Posts, self).save(*args, **kwargs)


	def __str__(self):
		return self.Title
