const constraints = {
    email: {
	presence: {
	    message: 'cannot be blank'
	},
	email: {
	    message: 'Enter a valid E-mail address'
	},
    },

    password: {
	presence: {
	    message: 'cannot be blank'
	},
	length: {
	    minimum: 5,
	    message: 'is too short'
	}
    },
    confirmPassword: {
	equality: 'password'
    },

    phone: {
	presence: {
	    message: 'cannot be blank',
	},
	length: {
	    minimum: 10,
	    message: 'Please follow the valid phone format: 9XXXXXXXXX'
	},
	format: {
	    pattern: '[9]([0-9]{9})',
	    flags: 'i',
	    message: 'Please follow the valid phone format: 9XXXXXXXXX'
	}
    },
    
    address: {
	presence: {
	    message: 'cannot be blank',
	},
    },
    name: {
	presence: {
	    message: 'cannot be blank',
	},
    },
    birthday: {
	presence: {
	    message: 'cannot be blank',
	},
    },

};

export default constraints; 
