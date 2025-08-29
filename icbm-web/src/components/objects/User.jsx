
class User {
    constructor(id, name, lang = 'en') {
        this.id = id;
        this.name = name;

        this.lang = lang;
        this.role = "user"; // For permissions (e.g., 'admin', 'user')
        this.createdAt = new Date().toISOString(); // Join date

        this.self = false; // Is this the currently logged-in user?

        // Display properties (flattened to match component usage)
        this.status_long = "Offline";
        this.status_short = "Offline";
        this.status_colour = "default";

        this.mode = "idle";
        this.mode_colour = "info";

        this.badge_name = "Recruit";
        this.badge_colour = "primary";
    }
}

export default User;
