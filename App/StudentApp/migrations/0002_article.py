# Generated by Django 3.1.2 on 2021-05-03 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('StudentApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('ArticleId', models.AutoField(primary_key=True, serialize=False)),
                ('ArticleContent', models.TextField()),
            ],
        ),
    ]
