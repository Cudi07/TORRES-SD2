    let role = prompt("Enter your role (admin, editor, viewer):").toLocaleLowerCase();
    switch (role) {
        case "admin":
            alert("You have the permission for full access.");
            break;
        case "editor":
            alert("You have the permission for editing content.");
            break;
        case "viewer":
            alert("You have the permission to view content.");
            break;
        default:
            alert("Invalid role.");
    }