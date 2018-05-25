from django.db import models

class Track(models.Model):
	title = models.CharField(max_length=255, verbose_name='Название')
	duration = models.IntegerField(verbose_name='Длительность')
	bpm = models.IntegerField(verbose_name='bpm')
	#ganre = 
	#tags = 
	img = models.FileField(upload_to='logos/', verbose_name='Изображение')
	mp3File = models.FileField(upload_to='tracks/mp3/', verbose_name='Файл mp3')
	wavFile = models.FileField(upload_to='tracks/wav/', verbose_name='Файл wav')
	flpFile = models.FileField(upload_to='tracks/flp/', verbose_name='Файл flp')

	mp3Cost = models.IntegerField(verbose_name='Цена mp3')
	wavCost = models.IntegerField(verbose_name='Цена wav')
	flpCost = models.IntegerField(verbose_name='Цена flp')

	mwCost = models.IntegerField(verbose_name='Цена mp3+wav')
	mfCost = models.IntegerField(verbose_name='Цена mp3+flp')
	wfCost = models.IntegerField(verbose_name='Цена wav+flp')
	fullCost = models.IntegerField(verbose_name='Цена mp3+wav+flp')