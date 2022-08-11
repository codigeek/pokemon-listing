
export const getRoles = (user) => {
    switch (user.user_type_id) {
        // ADMIN
        case "62255abf045b1c5795a6028a":
            return "isAdmin";
        // BRAND MANAGER
        case "621c677d6329a6c34f9e9aa5":
            return "isBrandAdmin";
        // BRANCH MANAGER
        case "621c67956329a6c34f9e9ab2":
            return "isBranchAdmin";
        // SALES
        case "621c7b93e49d8d94cdf082aa":
            return "isSales";
        default:
            return "";
    }
}

export const analyzePermissions = (user, history) => {
    switch (user.user_type_id) {
        // ADMIN
        case "62255abf045b1c5795a6028a":
            history.push("/administracion/usuarios");
            break;
        // BRAND MANAGER
        case "621c677d6329a6c34f9e9aa5":
            history.push("/mi-negocio/reporte");
            break;
        // BRANCH MANAGER
        case "621c67956329a6c34f9e9ab2":
            history.push("/ventas");
            break;
        // SALES
        case "621c7b93e49d8d94cdf082aa":
            history.push("/ventas");
            break;
        default:
            break;
    }
}