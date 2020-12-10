userSchema.set('toJSON', {
    transform: (doc, user) => {
        user.id = user._id.toString()
        delete user._id
        delete user._v
        delete user.password
    }
})

userSchema.pre('save')

const User = mongoose.model('User', userSchema)

