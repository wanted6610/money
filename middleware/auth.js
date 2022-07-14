export default function ({ store, redirect }) {
  if (!store.state.user.profile) return redirect('/login')
}
