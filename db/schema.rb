# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_31_004736) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string "account_name"
    t.bigint "users_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["users_id"], name: "index_accounts_on_users_id"
  end

  create_table "announcements", force: :cascade do |t|
    t.text "body"
    t.bigint "users_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["users_id"], name: "index_announcements_on_users_id"
  end

  create_table "games", force: :cascade do |t|
    t.string "game_name"
    t.bigint "accounts_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["accounts_id"], name: "index_games_on_accounts_id"
  end

  create_table "team_has_tournaments", force: :cascade do |t|
    t.bigint "tournament_id"
    t.bigint "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["team_id"], name: "index_team_has_tournaments_on_team_id"
    t.index ["tournament_id"], name: "index_team_has_tournaments_on_tournament_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "team_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tournaments", force: :cascade do |t|
    t.string "tournament"
    t.string "_name"
    t.text "tournament_description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_has_teams", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["team_id"], name: "index_user_has_teams_on_team_id"
    t.index ["user_id"], name: "index_user_has_teams_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "firstName"
    t.string "lastName"
    t.string "username"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "level", default: 1
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "accounts", "users", column: "users_id"
  add_foreign_key "announcements", "users", column: "users_id"
  add_foreign_key "games", "accounts", column: "accounts_id"
  add_foreign_key "team_has_tournaments", "teams"
  add_foreign_key "team_has_tournaments", "tournaments"
  add_foreign_key "user_has_teams", "teams"
  add_foreign_key "user_has_teams", "users"
end
