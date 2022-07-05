// import model if there is a db interaction

const yourController = async (req, res) => {
    try {
        // YOUR LOGIC
        return res.status(200).json('WHATEVER TO RETURN')
    } catch (error) {
        return res.status(500).json({ error_msg: error.message })
    }
}

module.exports = yourController