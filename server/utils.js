const createResovelrs = (resolver) => {
	const baseResolver = resolver;
	baseResolver.createResovelrs = (childResolver) => {
		const newResolver = async (parent, args, context) => {
			await resolver(parent, args, context);
			return childResolver(parent, args, context);
		};
		return createResovelrs(newResolver);
	};
	return baseResolver;
};

export const requireAuth = createResovelrs((parent, args, context) => {
	if (!context.user) {
		throw new Error('Not Authenticated');
	}
});

export const requireAdmin = requireAuth.createResovelrs((parent, args, context) => {
	if (!context.User.isAdmin) {
		throw new Error('Requires Admin Access');
	}
});

function hasPermission(user, admin) {
	const matchedPermissions = user.permissions.filter((permissionTheyHave) => admin.includes(permissionTheyHave));
	if (!matchedPermissions.length) {
		throw new Error(`You do not have sufficient permissions
      : ${admin}
        You Have:
            ${user.permissions}
      `);
	}
}

exports.hasPermission = hasPermission;
