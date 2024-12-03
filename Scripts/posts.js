import {
  where,
  limit,
  query,
  orderBy,
  serverTimestamp,
  onSnapshot,
  getDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getFirestore,
  setDoc,
  doc,
  collection,
  addDoc,
  db,
}
  from "./firebase.js"

let addingPost = document.getElementById("posting");

addingPost.addEventListener("click", async () => {
  console.log("hi");
  let titleValue = document.getElementById("postTitle").value;
  let descriptValue = document.getElementById("postDescription").value;
  let post = document.getElementById("postOutput");

  try {
    // ... other code ...
    if (titleValue && descriptValue) {
      post.innerHTML += `<div class="card mt-3 card-bg border customBg">
      <div class="card-body">
          <h5 class="card-title fontStyle" id="previousTitle">${titleValue}</h5>
          <p class="card-text fontStyle"  id="previousDescription">${descriptValue}</p>
      </div>
      <div class="d-flex p-3 gap-2">
          <button type="button" class="btn btn-success border-white" id="editPost">Edit</button>
          <button type="button" class="btn btn-danger border-white" id="deletePost">Delete</button>
      </div>
  </div>`;
    }
    else{
      Swal.fire({
                title: "Title and description both are required!",
                icon: 'warning',
                customClass: {
                    confirmButton: 'custom-confirm-button'
                },
                confirmButtonText: 'OK'
            });
    }

   

    const docRef = await addDoc(collection(db, "posts"), {
      title: titleValue,
      descript: descriptValue,
      // Other fields if needed
    });

    console.log("Document written with ID: ", docRef.id);

    titleValue = "";
    descriptValue = "";
  } catch (error) {
    // ... error handling
    Swal.fire({
      title: "Error",
      text: error.message,
      icon: 'error',
      customClass: {
        confirmButton: 'custom-confirm-button'
      },
      confirmButtonText: 'OK'
    });
  }
 


// function deletepost(event) {
  let deletingPost = document.getElementById("deletePost");
  deletingPost.addEventListener("click",(event)=> {
  event.target.parentNode.parentNode.remove();
})

let editingPost = document.getElementById("editPost");
editingPost.addEventListener("click", async ()=> {
  var previousTitle = document.getElementById('previousTitle');
  var previousDescription = document.getElementById('previousDescription');
  const { value: formValues } = await Swal.fire({
    title: 'Update Post',
    html: `
  <label>
  <strong>Title: </strong><br>
  <input id="swal-input1" class="swal2-input" value="${previousTitle.innerHTML}">
  </label>
  <label>
  <br>
  <strong>Description: </strong><br>
  <input id="swal-input2" class="swal2-input" value="${previousDescription.innerHTML}">
  </label>
  `,

    focusConfirm: false,
    customClass: {
      confirmButton: 'custom-confirm-button'  // Add a custom class for the button
    },

    focusConfirm: false,
    preConfirm: () => {
      return [document.getElementById('swal-input1').value, document.getElementById('swal-input2').value];
    },
  });

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Post has been updated',
    showConfirmButton: false,
    timer: 1500,
  });
  setTimeout(function () {

    previousTitle.innerHTML = formValues[0];
    previousDescription.innerHTML = formValues[1];
  }, 1500)

})
});
