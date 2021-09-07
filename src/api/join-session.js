import firebase from '../firebase';

const joinSession = (sessionName, userName) => {
    return new Promise((resolve, reject) => {
        // TODO: Handle errors and return responses.
        const db = firebase.firestore();
        let alreadyExists = false;

        db.collection(sessionName)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    alreadyExists = true;
                    console.log(`${doc.id} => ${doc.data().name}`);
                });
                if (alreadyExists) {
                    console.log('already exists, joining now');
                    db.collection(sessionName)
                        .add({
                            name: userName,
                            currentPoint: '',
                            isModerator: false
                        })
                        .then((docRef) => {
                            console.log(
                                'document written with ID: ',
                                docRef.id
                            );
                            resolve(docRef.id);
                        })
                        .catch((err) => reject(err));
                } else {
                    console.log("Doesn't exist can't join");
                    // TODO: Error handling here
                    reject(
                        'session does not exist try joining a new different one or create one'
                    );
                }
            });
    });
};

export default joinSession;
