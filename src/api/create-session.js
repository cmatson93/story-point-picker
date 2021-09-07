import firebase from '../firebase';

const createSession = (sessionName, userName) => {
    return new Promise((resolve, reject) => {
        const db = firebase.firestore();
        let alreadyExists = false;

        db.collection(sessionName)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log('forEach');
                    alreadyExists = true;
                    console.log(`${doc.id} => ${doc.data().name}`);
                });
                if (alreadyExists) {
                    console.log('already exists');
                    reject('session name already sexists');
                } else {
                    console.log("Doesn't exist create collection");
                    db.collection(sessionName)
                        .add({
                            name: userName,
                            currentPoint: '',
                            isModerator: true
                        })
                        .then((docRef) => {
                            console.log(
                                'document written with ID: ',
                                docRef.id
                            );
                            resolve(docRef.id);
                        })
                        .catch((err) => reject(err));
                }
            });
    });
};

export default createSession;
