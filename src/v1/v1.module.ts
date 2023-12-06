import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { AdminModule } from "./admin/admin.module";
import { QuestionsModule } from "./questions/questions.module";
import { TestsModule } from "./tests/tests.module";
import { BaseModule } from "./base/base.module";

@Module({
  imports: [UsersModule, AdminModule, QuestionsModule, TestsModule, BaseModule]
})
export class V1Module {}
