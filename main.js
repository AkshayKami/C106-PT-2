function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/gK29xzU1W/model.json', modelReady);
}


function modelReady()
{
   classifier.classify(gotReady);
}