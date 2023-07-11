FROM python:3.10

WORKDIR /app

EXPOSE 5050

COPY Pipfile ./
COPY Pipfile.lock ./

RUN pip install pipenv
RUN pipenv requirements --dev > dev-requirements.txt
RUN pip install -r dev-requirements.txt

COPY . ./

CMD ["python", "app.py"]