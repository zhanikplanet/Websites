function showAdminUI() {
  function addMember(name, description) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";

    const img = document.createElement("img");
    img.src = "channels4_profile.jpg";
    img.classList.add("card-img-top");
    img.alt = "Member Image";

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = name;

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = description;

    const modalButton = document.createElement("button");
    modalButton.type = "button";
    modalButton.classList.add("btn", "btn-primary");
    modalButton.setAttribute("data-toggle", "modal");
    modalButton.setAttribute("data-target", "#staticBackdrop");
    modalButton.innerText = "More about member";

    const modal = document.createElement("div");
    modal.classList.add("modal", "fade");
    modal.id = "staticBackdrop";
    modal.setAttribute("data-backdrop", "static");
    modal.setAttribute("data-keyboard", "false");
    modal.tabIndex = "-1";
    modal.setAttribute("aria-labelledby", "staticBackdropLabel");
    modal.setAttribute("aria-hidden", "true");

    // 将所有元素组装到卡片和 modal 中
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(modalButton);
    card.appendChild(img);
    card.appendChild(cardBody);
    $("#addMemberModal").on("hidden.bs.modal", function () {
      $("#memberName").val("");
      $("#memberDescription").val("");
    });
    // 将卡片添加到成员容器中
    const membersContainer = document.getElementById("member-container");
    membersContainer.appendChild(card);
  }

  // 按钮点击事件处理程序
  const addButton = document.getElementById("add-member");
  addButton.addEventListener("click", () => {
    // 手动打开 modal
    $("#addMemberModal").modal("show");
  });

  // 保存成员按钮点击事件处理程序
  const saveButton = document.getElementById("saveMember");
  saveButton.addEventListener("click", () => {
    const name = document.getElementById("memberName").value;
    const description = document.getElementById("memberDescription").value;

    addMember(name, description);

    $("#addMemberModal").modal("hide");
  });
}
