const sampleController = async (req, res) => {
    try {
        return res.status(200).json('WHATEVER TO RETURN')
    } catch (error) {
        return res.status(500).json({ error_msg: error.message })
    }
}

module.exports = sampleController