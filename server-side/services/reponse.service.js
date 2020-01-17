exports.apiQueryResponse = ((err, data, res) => {
	if (err) {
		return res.status(500).send(err);
	} else if (data.val()) {
		return res.status(200).json({'status': true, 'data': data.val()});
	} else {
		return res.status(200).json({'status': false});
	}
});

exports.success = ((message, res) => res.status(200).json({'status': 'true', 'data': message}));

exports.failure = ((message, res) => res.status(200).json({'status': 'false', 'data': message}));

exports.error = ((message, res) => res.status(500).send(message));
